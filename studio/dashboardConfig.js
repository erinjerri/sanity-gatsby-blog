export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5db4bfcd85306741c92dfba1',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-nu5fdjcu',
                  apiId: 'a4cfb057-4d48-4138-9d0b-6ce2b7e00383'
                },
                {
                  buildHookId: '5db4bfcda35d1ff09334841b',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-jj4ca4ow',
                  apiId: '5930b596-e6fa-46e9-90bc-ce5b49543a35'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/erinjerri/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-jj4ca4ow.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
