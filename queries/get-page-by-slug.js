export const GetPageBySlug = gql`
    query GetPageBySlug($slug: String) {
        Page(slug: $slug) {
            title
            _id
            content {
                __typename
                ... on Hero {
                    _id
                    sub_heading
                    image {
                        url(preset: "Hero", width: 2000)
                        height
                        width
                    }
                    _context {
                        variant_key
                    }
                    heading
                    buttons {
                        button_type
                        text
                        external_url
                        link {
                            ... on Category {
                                _slug
                            }
                            ... on Page {
                                _slug
                            }
                            ... on Post {
                                _slug
                            }
                        }
                    }
                }
                ... on Feature {
                    _id
                    heading
                    sub_heading
                    button {
                        button_type
                        text
                        external_url
                        link {
                            ... on Category {
                                _slug
                            }
                            ... on Page {
                                _slug
                            }
                            ... on Post {
                                _slug
                            }
                        }
                    }
                    _context {
                        variant_key
                    }
                    image_position
                    image {
                        url(width: 870, height: 570)
                    }
                }
            }
        }
    }`;