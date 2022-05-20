export default {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
        {
            name: 'image',
            title: 'Image',
            type: 'array',
            of: [{type: 'image'}],
            options: {
                hotspot: true,
            }
        },
        {
            name: 'title',
            title: 'Name',
            type: 'string'
        },
        {
            name:'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 90,
            }
        },
        {
            name: 'Price',
            title: 'Price',
            type: 'number'
        },
        {
            name: 'description',
            title: 'Description',
            type: 'string',
        },
        {
            name:'details',
            title: 'Details',
            type: 'string',
        }
]}