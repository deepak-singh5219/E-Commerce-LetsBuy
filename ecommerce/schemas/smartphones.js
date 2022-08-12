export default {
    name:'smartphone',
    title:'Smart Phone',
    type:'document',
    fields:[
        {
            name:'image',
            title:'Image',
            type:'array',
            of:[{type:'image'}],
            options:{
                hotspot: true,
            }
        },
        {
            name:'name',
            title:'Name',
            type:'string',

        },
        {
            name:'slug',
            title:'Slug',
            type:'slug',
            options:{
                source:'name',
                maxLength:90,
            }
        },
        {
            name:'discount',
            title:'Discount',
            type:'string',
        },
        {
            name:'actualPrice',
            title:'Actual Price',
            type:'number',
        },
        {
            name:'price',
            title:'Price',
            type:'number',

        },
        {
            name:'details',
            title:'Details',
            type:'string',

        }
    ]
}