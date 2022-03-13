import React from 'react'
// export default function Temp({ options }) {
//   const filteredData = options.filter((el) => {
//     //if no input the return the original
//     if (options.input === '') {
//       return el;
//     }
//     //return the item which contains the user input
//     else {
//       return el.text.includes(options.input)
//     }
//   })
//   return (
//     <div>
//       <ul>
//         {filteredData.map((item) => (
//           <li key={item.id}>{item.text}</li>
//         ))}
//       </ul>
//     </div>
//   )
// }
const Temp = ({ searchQuery, setSearchQuery }) => (
  <form action="/" method="get">
      <label htmlFor="header-search">
          <span className="visually-hidden">Search blog posts</span>
      </label>
      <input
          value={searchQuery}
          onInput={e => setSearchQuery(e.target.value)}
          type="text"
          id="header-search"
          placeholder="Search blog posts"
          name="s"
      />
      <button type="submit">Search</button>
  </form>
);

export default Temp;