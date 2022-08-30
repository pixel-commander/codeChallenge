export const DataTableFormDemo = ({ id, first_name, last_name, email, avatar, setShowForm }) => {
  return (
    <div className="overlay">
      <div className="overlay__inner">
        <div class='data-table-form'>
          <p>form here</p>
          <div>
            <div><strong>editing</strong></div>
            <div>id: {id}</div>
            <div>first_name: {first_name}</div>
            <div>last_name: {last_name}</div>
            <div>email: {email}</div>
            <div>avatar: {avatar}</div>
          </div>
          <button type='button' onClick={() => setShowForm(false)}>hide</button>
        </div>
      </div>
    </div>
  )
}