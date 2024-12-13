import React from 'react'

export function HeaderNav() {
  const navTags =  [
    {
      id: 1,
      text: "Research",
      link: "#"
    },
    {
      id: 2,
      text: "Products",
      link: "#"
    },
    {
      id: 3,
      text: "Safety",
      link: "#"
    },
    {
      id: 4,
      text: "Company",
      link: "#"
    }
  ]
  return (
    <header>
        <nav className='nav'>
            <div className="logo">
                <h1>OpenAI</h1>
            </div>
            <div className="tags">
              {
              navTags.map((tag) => {
                return(
                  <a href={tag.link} className="navTag">{tag.text}</a>
                )
              })
              }
            </div>
            <div className="search">
              <i class="bi bi-search"></i>
            </div>
        </nav>
    </header>
  )
}
