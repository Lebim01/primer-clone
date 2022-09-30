type Props = {
  headers: { title: string, key: string }[];
  rows: any[];
}

const Table = (props: Props) => {
  return (
    <table className="w-full">
      <thead>
        {props.headers.map(({ title, key }) => 
          <th key={`col-${key}`}>{title}</th>
        )}
      </thead>
      <tbody>
        {props.rows.map((row, index) => 
          <tr key={`row-${index}`}>
            {props.headers.map(({ key }) => 
              <td key={`row-${row}-${key}`}>{row[key]}</td>
            )}
          </tr>
        )}
      </tbody>
    </table>
  )
}

export default Table