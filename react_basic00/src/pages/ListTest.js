const DATA = [
    { id: 1, name: '목단비', age: 21, sleep: false },
    { id: 2, name: '금단비', age: 26, sleep: true },
    { id: 3, name: '토단비', age: 18, sleep: true }
]

const List = () => {
    return (
        <ul>
            {
                DATA.map(
                    (it, idx) =>
                        <li key={it.id}>
                            {it.name} {it.age} {it.sleep ? 'sleeping' : 'playing'}
                        </li>)
            }



            {/* {DATA[0].name}는 {DATA[0].age}살 {DATA[0].sleep && '자고싶음'} */}
            {/* {DATA[1].name}는 {DATA[1].age}살 {DATA[1].sleep && '자고싶음'} */}
            {/* {DATA[2].name}는 {DATA[2].age}살 {DATA[2].sleep && '자고싶음'} */}
        </ul>
    )
}

export default List;