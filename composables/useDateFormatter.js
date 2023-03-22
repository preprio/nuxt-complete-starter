// by convention, composable function names start with "use"
export function useDateFormatter(date) {
    const options = { year: 'numeric', month: 'short', day: 'numeric' }
    return new Date(date).toLocaleDateString('en-US', options)
  }