import React from 'react'

import UserLayout from './UserLayout'
function UserItems(props) {
    if (props.items.length = 0)
        return (
            <div>
                <h2>no user found</h2>
            </div>
        )
    return (
        <ul>
            {
                props.items.map(user => {
                    return(
                    <UserLayout
                        key={user.id}
                        id={user.id}
                        image={user.imaage}
                        name={user.name}
                        placeCount={user.places} />)
                }
              )
            } 
        </ul>
    )
}

export default UserItems
