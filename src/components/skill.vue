<template>
  <div class="container-fluid row">
    <div v-for="(skill, index1) in skills" class="col-sm skillCon">
      <img :src="'src/assets/images/'+skill.skillImg" alt="skillImages">
      <br><br>
      <h4>{{skill.skillName}}</h4>
      <form class="input-group mb-3">
        <input class="form-control" v-model.lazy="skills[index1].currentSkill" type="text"/>
        <div class="input-group-append">
          <button type="button" class="btn btn-secondary" v-on:click.prevent="addSkill(index1)">Add a skill</button>
        </div>
      </form>
      <transition enter-active-class="animated zoomInLeft" leave-active-class="animated zoomOutRight">
        <p v-show="skill.show" id="errortext">Please enter a skill!</p>
      </transition>
      <ul v-for="(skillDetail,index2) in skill.skillDetails">
        <li :key="index2" class="animated bounceInUp">{{skillDetail}}<i class="far fa-trash-alt float-right" v-on:click="deleteSkill(index1, index2)"></i></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      skills: [
        {
         skillName:'Coding',
         skillImg: 'coding.png',
         skillDetails: ['HTML', 'CSS', 'Javascript', 'Foundation/Bootstrap','Node.js', 'Vue.js', 'PHP', 'Mysql','jQuery'],
         currentSkill: '',
         show: false
        },
        {
         skillName:'Design',
         skillImg: 'design.png',
         skillDetails: ['Illustrator', 'Photoshop', 'Indesign', 'Invision', 'Sketch'],
         currentSkill: '',
         show: false
        },
        {
         skillName:'Motion',
         skillImg: 'motion.png',
         skillDetails: ['After Effects', 'Cinema4D'],
         currentSkill: '',
         show: false
        }
      ]

    }
  },
  methods:{
    addSkill: function (index1){
      if(this.skills[index1].currentSkill !== ''){
        this.skills[index1].skillDetails.push(this.skills[index1].currentSkill);
        this.skills[index1].currentSkill = '';
        this.skills[index1].show= false;
      }else{
        this.skills[index1].show= true;
      }

    },
    deleteSkill: function (index1,index2){
      this.skills[index1].skillDetails.splice(index2,1);
    }
  }
}
</script>

<style lang="scss" scoped>
.container-fluid{
  padding: 0;
  margin: 0;
  .skillCon{
    margin-top: 100px;
    text-align: center;
    padding: 0 50px 0 50px;
    img{
      width: 200px;
    }ul{
      list-style: none;
      padding: 0;
      li{
        color: white;
        padding: 10px;
        background: rgb(52, 52, 52);
        margin-bottom: -1.2em;
        border: 1px solid white;
        border-radius: 5px;
      }
    }
  }
}
#errortext{
  background: lightyellow;
  padding: 10px;
  border: 1px solid grey;
  border-radius: 5px;
}
.fa-trash-alt{
  transition: 0.5s all ease;
  &:hover{
    color: rgb(64, 207, 185);
    cursor: pointer;
    animation: trash 1s ease;
  }
}
@keyframes trash{
  0% {transform: scale(1);}
  20% {transform: scale(1.15);}
  75% {transform: scale(0.75);}
  100% {transform: scale(1);}
}
</style>
