import menuItem from "./menuItem"

export default {
    name : 'restaurant',
    title : 'Restaurant',
    type : 'document',
    fields : [
        {
            name : 'title',
            title : 'Title',
            type : 'string'
        },
        {
            name : 'location',
            title : 'Location',
            type : 'geopoint'
        },
        {
            name :'description',
            title : 'Description',
            type : 'string'
        },
        {
            name : 'restaurantType',
            title : 'Restaurant Type',
            type : 'string',
            options : {
                list : [
                    {title : 'DineIn', value : 'dine-in'},
                    {title : 'TakeAway' , value : 'take-away'},
                    {title : 'DeliveryOnly' , value : 'delivery'}
                ],
                layout : 'radio'
            }
        },
        {
            name : 'mainImage',
            title : 'Main Image',
            type : 'image',
            options : {
                hotspot : true
            }
        },
        {
            name : 'menu',
            title : 'Menu',
            type : 'array',
            of : [{type : 'menuItem'}]
        }
    ]
}