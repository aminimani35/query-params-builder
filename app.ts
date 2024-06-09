type TObject = { [key: string]: string | number | boolean | Date }


function queryBuilder(obj: TObject) {
    const keysList = Object.keys(obj)
    let query = "?"
    keysList.map((key, index) => {
        query += `${key}=${obj[key]}${index === keysList.length - 1 ? '' : "&"}`
    })

    return query

}
