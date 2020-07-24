export default {
    pathForKits
}

function pathForKits(self){
    const pathArray = ["kits", self.$route.params.kitId]
    return pathArray.join('/')
}