#!/usr/bin/env python3
"""Render the Nuxt complete guide MDX from templates/ into nuxt-complete-guide/.

Every code block comes from a git tag, so the guide can't drift from the starter:

    @@code <ref> <path>@@                 whole file, no highlights
    @@code <ref> <path> diff=<prev>@@     highlight lines changed since <prev>

The placeholder's indentation is applied to the whole block (Nextra list items).
Run from the repo root: python3 docs/guide/build.py
"""
import difflib
import pathlib
import re
import subprocess

HERE = pathlib.Path(__file__).parent
LANG = {'.vue': 'vue', '.ts': 'ts', '.css': 'css', '.graphql': 'graphql', '.json': 'json', '.example': 'bash'}
PLACEHOLDER = re.compile(r'^(\s*)@@code (\S+) (\S+)(?: diff=(\S+))?@@$')


def show(ref, path):
    return subprocess.run(['git', 'show', f'{ref}:{path}'], capture_output=True, text=True, check=True).stdout


def changed_lines(old, new):
    ranges = []
    matcher = difflib.SequenceMatcher(None, old.splitlines(), new.splitlines())
    for tag, _, _, j1, j2 in matcher.get_opcodes():
        if tag in ('replace', 'insert'):
            ranges.append(f'{j1 + 1}' if j2 - j1 == 1 else f'{j1 + 1}-{j2}')
    return ranges


def render_block(match):
    indent, ref, path, prev = match.groups()
    code = show(ref, path).rstrip('\n')
    meta = f'filename="./{path}" copy'
    if prev:
        try:
            old = show(prev, path)
        except subprocess.CalledProcessError:
            old = ''  # new file: nothing to highlight
        ranges = changed_lines(old, code) if old else []
        if ranges:
            meta += ' {' + ', '.join(ranges) + '}'
    lang = LANG.get(pathlib.Path(path).suffix, '')
    lines = [f'```{lang} {meta}', *code.split('\n'), '```']
    return '\n'.join((indent + line) if line else '' for line in lines)


out_dir = HERE / 'nuxt-complete-guide'
out_dir.mkdir(exist_ok=True)
for template in sorted((HERE / 'templates').iterdir()):
    rendered = '\n'.join(
        render_block(m) if (m := PLACEHOLDER.match(line)) else line
        for line in template.read_text().split('\n')
    )
    (out_dir / template.name).write_text(rendered)
    print(f'wrote {out_dir.name}/{template.name}')
