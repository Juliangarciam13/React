const Batman = ({ superheroName = 'Batman', secretIdentity = 'Bruce Wayne', img = 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Batman_%28black_background%29.jpg/800px-Batman_%28black_background%29.jpg', age = '43'}) => {
    return (
        <div>
            <h1>
                {superheroName}
            </h1>
            <img src={img} alt={superheroName} style={{ width: '200px', height: '200px' }} />
            <p>
                age: {age}
            </p>
            <p>
                Secret Indentity: {secretIdentity}
            </p>
        </div>
    )
}

export default Batman;