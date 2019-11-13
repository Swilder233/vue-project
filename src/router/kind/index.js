export default {
    path:"/kind",
    component:_=>import("@pages/kind"),
<<<<<<< HEAD
    name:"kind",   
=======
    name:"kind",
    children:[     
        {
            path:"/kind",
            redirect:"/kind/one"
        },
        {
            path:"one",
            component:_=>import("@components/kindChild/one"),
            name:"one",
            meta:{

            }
        },
        {
            path:"two",
            component:_=>import("@components/kindChild/two"),
            name:"two",
            meta:{

            }
        },
        {
            path:"three",
            component:_=>import("@components/kindChild/three"),
            name:"three",
            meta:{

            }
        },
        {
            path:"four",
            component:_=>import("@components/kindChild/four"),
            name:"four",
            meta:{

            }
        },
        {
            path:"five",
            component:_=>import("@components/kindChild/five"),
            name:"five",
            meta:{

            }
        },
        {
            path:"six",
            component:_=>import("@components/kindChild/six"),
            name:"six",
            meta:{

            }
        },
        {
            path:"seven",
            component:_=>import("@components/kindChild/seven"),
            name:"seven",
            meta:{

            }
        },
        {
            path:"eight",
            component:_=>import("@components/kindChild/eight"),
            name:"eight",
            meta:{

            }
        },
    ]
>>>>>>> huanhuan
}


