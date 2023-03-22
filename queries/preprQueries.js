export const GetUpcomingLiveStreams = gql`
  query ($where: LiveEventWhereInput) {
    LiveEvents(where: $where) {
      items {
        _id
        _slug
        title
        start_day_and_time
        speakers {
          full_name
          profile_pic {
            url(width: 1920)
          }
        }
        heading
        live_stream {
          cover(width: 1920)
        }
        seo {
          social_media_image {
            url(width: 1920)
            name
          }
        }
      }
    }
  }
`;

export const GetRecordedLiveStreams = gql`
  query ($where: LiveEventWhereInput) {
    LiveEvents(where: $where) {
      items {
        _id
        _slug
        title
        start_day_and_time
        speakers {
          _id
          full_name
          profile_pic {
            url(preset: "Mobile")
          }
        }
        heading
        live_stream {
          cover(width: 1920)
        }
        seo {
          social_media_image {
            url(width: 1920)
            name
          }
        }
      }
    }
  }
`;

export const GetStreamBySlug = gql`
  query ($slug: String) {
    LiveEvent(slug: $slug) {
      _id
      title
      _slug
      speakers {
        __typename
        bio
        full_name
        profile_pic {
          url(preset: "Mobile")
        }
      }
      heading
      live_stream_intro
      live_stream {
        _id
        playback_id
      }
      start_day_and_time
      seo {
        _id
        title
        description
        social_media_image {
          _id
          url(width: 1920)
        }
      }
    }
  }
`;

//With Stack
export const GetPageBySlug = gql`
  query ($slug: String) {
    Page(slug: $slug) {
      _id
      title
      _slug
      type
      stack {
        __typename
        ... on PageHeader {
          heading
          cta_url
          cta_label
          image {
            url(width: 1600)
          }
          _id
          text
        }
        ... on ArticleCollection {
          _id
          articles {
            _id
            title
            _slug
            authors {
              full_name
              profile_pic {
                url
                original_name
              }
              _read_time
              _created_on
              _publish_on
            }
            _publish_on
            seo {
              social_media_image {
                url
              }
            }
            content {
              ... on Text {
                body
              }
            }
          }
          heading
          cta_label
          cta_url
          description
        }
        ... on ImageAndText {
          image {
            url(width: 800)
          }
          text
          title
          image_position
          _id
        }
        ... on ProductCollection {
          heading
          description
          cta_url
          cta_label
          products {
            price
            title
            image
            description
          }
        }
        ... on CallToAction {
          background_image {
            url(width: 1600)
          }
          cta_label
          description
          heading
        }
      }
      seo {
        _id
        title
        description
        social_media_image {
          _id
          url
        }
      }
    }
  }
`;

export const GetArticles = gql`
  query ($where: ArticleWhereInput) {
    Articles(where: $where) {
      items {
        _id
        title
        _slug
        authors {
          full_name
          profile_pic {
            url
          }
          bio
        }
        _publish_on
        content {
          ... on Text {
            body
          }
        }
        categories {
          icon {
            url
          }
          title
          _slug
        }
        seo {
          social_media_image {
            url(width: 192, height: 224)
          }
        }
      }
    }
  }
`;

export const GetCategories = gql`
  {
    Categories {
      items {
        _id
        _slug
        icon {
          url
        }
        title
      }
    }
  }
`;

export const GetNavigation = gql`
  {
    Navigation(id: "6384ae35-4fe6-4208-b947-b8a509bd3d4b") {
      _id
      title
      menu_items {
        __typename
        title
        _slug
        _id
        children {
          _id
          title
          icon {
            url
          }
        }
      }
    }
  }
`;

export const GetArticleBySlug = gql`
  query ($slug: String) {
    Article(slug: $slug) {
      _id
      title
      _slug
      categories {
        icon {
          url
        }
        title
      }
      authors {
        full_name
        profile_pic {
          url
        }
        bio
      }
      content {
        __typename
        ... on Text {
          body
          text
          html
          format
          _id
        }
        ... on Quote {
          body
          author
        }
        ... on Assets {
          items {
            url(width: 928, height: 480)
            caption
          }
        }
      }
      seo {
        _id
        title
        description
        social_media_image {
          _id
          url
        }
      }
    }
  }
`;

export const GetSingleLineBySlug = gql`
  query ($slug: String) {
    SingleLine(slug: $slug) {
      title
      url1
      copy
    }
  }
`;
