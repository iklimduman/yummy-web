export default {
    name: 'menuItem',
    title: 'Menu Item',
    type: 'object',
    fields: [
        {
            name : 'title',
            title : 'Title',
            type : 'string',
        },
        {
            name : 'description',
            title : 'Description',
            type : 'string'
        },
        {
            name : 'price',
            title : 'Price',
            type : 'number'
        },
        {
            name: 'mainImage',
            title: 'Main Image',
            type: 'image',
            options: {
                hotspot: true
            }
        },
    ]
}