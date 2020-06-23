

// TODO extract common parts into the wrapper function

module.exports.handleCreate = res => data => {
    const result = {
        status: 201,
        message: 'Created',
        data
    }

    res.status(result.status).json(result)
}

module.exports.handleFailure = res => e => {
    const result = {
        status: 500,
        code: 'developer error, contact developer :)',
        message: e.message
    }

    console.log(e)

    res.status(result.status).json(result)
}

module.exports.handleGet = res => data => {
    const result = {
        status: 200,
        message: 'OK',
        data
    }

    res.status(result.status).json(result)
}

module.exports.handleUpdate = res => data => {
    const result = {
        status: 200,
        message: 'OK',
        data
    }

    res.status(result.status).json(result)
}

module.exports.handleDelete = res => data => {
    const result = {
        status: 200,
        message: 'Deleted',
        data
    }

    res.status(result.status).json(result)
}
