const isProduction = window.location.protocol === ('https')
export const baseUrl = isProduction ? '' : 'http://localhost:5001'