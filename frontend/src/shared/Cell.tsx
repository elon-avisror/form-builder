import * as React from 'react';

export default function Cell(cell: { content: React.ReactText, header: boolean, name: string }) {

  const validURL = (str: string): boolean => {
    const pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
      '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
    return !!pattern.test(str);
  }

  const cellMarkup = cell.header ?
      (
        <th className="Cell Cell-header">
          {cell.content}
        </th>
      )
    :
      typeof cell.content === 'string' && validURL(cell.content) ?
          (
            <td className="Cell">
              <a href={cell.content} style={{color: 'blue'}}>View button</a>
            </td>
          )
        :
          (
            <td className="Cell">
              {cell.content}
            </td>
          );

  return (cellMarkup);
}