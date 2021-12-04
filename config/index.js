const dev=process.env.NODE_ENV !=='production'

export const endpoint_base=dev?"http://localhost:3000/":process.env.LINK