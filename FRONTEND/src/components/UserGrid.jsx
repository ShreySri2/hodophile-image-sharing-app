import React from 'react'

import UserLayout from './UserLayout'

function UserGrid(props) {
    if (props.items.length === 0) {
        return (
            <div>
                <h2>no user found</h2>
            </div>
        )
    }

    else {
        return (
            <div>
                {
                    props.items.map(user => {
                        return (
                            <UserLayout
                                key={user.id}
                                id={user.id}
                                image={user.image}
                                name={user.name}
                                placeCount={user.places} />)
                    }
                    )
                }
            </div>
        )
    }
}

export default UserGrid
