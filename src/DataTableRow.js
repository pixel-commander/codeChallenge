export const DataTableRow = ({ idKey, avatar, first_name, last_name, email, handleEdit, handleDelete, id }) =>
  <tr key={`row${idKey}`}>
    <td className='data-table__td--id'>{id}</td>
    <td className='data-table__td--avatar'><img src={avatar} className='img--full' alt={`${first_name} ${last_name}`} /></td>
    <td className='data-table__td--first_name'>{first_name}</td>
    <td className='data-table__td--last_name'>{last_name}</td>
    <td className='data-table__td--email'>{email}</td>
    <td className='data-table__td--options'>
      <button type='button' onClick={() => handleEdit({ id, first_name, last_name, email, avatar })}>edit</button>
      <button type='button' onClick={() => handleDelete({ id, first_name, last_name })}>delete</button>
    </td>
  </tr>