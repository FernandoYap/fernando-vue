<template>
    <div>
        <layout-main>
            <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 class="h2">Detail User</h1>
            </div>
            <div>
                 <div class="card" >
                    <img src="/default.png" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">{{datausers?.company.name}}</h5>
                        <address class="card-text">
                            <strong> {{datausers?.Username}}</strong>
                            <br>
                            {{datausers?.address?.street}}, {{datausers?.address?.suite}} <br>
                            {{datausers?.address?.city}}, {{datausers?.address?.zipcode}} <br>
                            <abbr title="phone">{{datausers?.phone}}</abbr> <br>
                            <strong> {{datausers?.username}}</strong> <br>
                            {{datausers?.email}}
                        </address>
                    </div>
                </div>
            </div>
        </layout-main>
    </div>
</template>

<script>
import LayoutMain from "@/view/Layoutmain"
export default {
    components: {
        LayoutMain
    },
    data(){
        return {
            id : this.$route.params.id,
            datausers: null
        }
    },
    methods: {
         getDetailUser(id){
            fetch("https://jsonplaceholder.typicode.com/users/" + id)
            .then(response => response.json())  //then 1, set response sebagai json
                .then(json => {
                    this.datausers = json;
                })   //then 2, ambil respon json dan set sebagai data
                .catch(error => {
                    console.log(error);
                })
        }
    },
    mounted(){
        this.getDetailUser(this.id);
    }
}
</script>