// API Product
export const API_PRODUCT =
  'https://server-oasis-perfume.onrender.com/api/v1/product/'
// API Product with name
export const API_PRODUCT_NAME = `${API_PRODUCT}sort/name?name=`
// API Product with concentration
export const API_PRODUCT_CONCENTRATION = `${API_PRODUCT}sort/concentration?concentration=`
// API Get all brands products list
export const API_BRANDS =
  'https://server-oasis-perfume.onrender.com/api/v1/brand/'
// API get product favorite
export const API_FAVORITE_PRODUCT = `${API_PRODUCT}favorite/`
// API get blog
export const API_BLOG = 'https://server-oasis-perfume.onrender.com/api/v1/blog/'
// API get blog with slug
export const API_BLOG_SLUG = `${API_BLOG}slug/`
// API get product fill with collection
export const API_PRODUCT_MEN_COLLECTION = `${API_PRODUCT}collection/men`
export const API_PRODUCT_WOMEN_COLLECTION = `${API_PRODUCT}collection/women`
export const API_PRODUCT_UNISEX_COLLECTION = `${API_PRODUCT}collection/unisex`
// API post order
export const API_ORDER =
  'https://server-oasis-perfume.onrender.com/api/v1/order'
// API verify order
export const API_VERIFY_ORDER = `${API_ORDER}/verify`
// API comment
export const API_COMMENT =
  'https://server-oasis-perfume.onrender.com/api/v1/product/comment/'
export const API_COMMENT_VERIFY = `${API_COMMENT}verify/`
export const API_COMMENT_FAIL = `${API_COMMENT_VERIFY}/fail/`
