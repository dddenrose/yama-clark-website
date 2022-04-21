<template>
  <div>
    <div class="show-button" v-if="!showChat">
      <button @click="setShowChat(true)">
        <i class="fas fa-comment-dots"></i>
      </button>
    </div>
    <transition>
      <div class="main-chat" v-if="showChat">
        <div class="info">
          <div class="title">custom service</div>
          <div @click="deleteChat" class="delete">
            <i class="far fa-trash-alt"></i>
          </div>
          <div @click="setShowChat(false)" class="delete">
            <i class="far fa-times-circle"></i>
          </div>
        </div>
        <div class="chat-box" v-if="chatList !== []">
          <div v-for="(chat, index) in chatList" :key="index" class="text-box">
            <div class="text">
              <div class="time">
                {{ new Date(chat.time).toLocaleDateString() }}
                {{ new Date(chat.time).toLocaleTimeString() }}
              </div>
              <div class="chat">{{ chat.chat }}</div>
            </div>
          </div>
        </div>
        <div class="error" v-if="chatError !== null">
          {{ chatError }}
        </div>
        <div class="enter">
          <input
            type="text"
            v-model="chat"
            @keyup.enter="chatEnter"
            placeholder="Input something"
          />
          <button @click="chatEnter"><i class="fas fa-paper-plane"></i></button>
        </div>
      </div>
    </transition>
  </div>
</template>


<script>
import { mapActions, mapMutations, mapState } from "vuex";

export default {
  methods: {
    ...mapActions(["chatEnter", "deleteChat"]),
    ...mapMutations(["setShowChat"]),
  },

  computed: {
    ...mapState(["chatList", "showChat", "user", "chatError"]),
    chat: {
      get() {
        return this.$store.state.chat;
      },
      set(value) {
        this.$store.commit("setChat", value);
      },
    },
  },
};
</script>


<style lang="scss" scoped>
$brand-color: #bfb094;
$gray-color: #5b5b5b;
$green-color: #3e5940;

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 10px;
}

::-webkit-scrollbar {
  height: 6px; /* height of horizontal scrollbar ← You're missing this */
  width: 6px; /* width of vertical scrollbar */
}

.v-leave {
  opacity: 1;
}
.v-leave-active {
  transition: opacity 0.5s;
}
.v-leave-to {
  opacity: 0;
}
.v-enter {
  opacity: 0;
}
.v-enter-active {
  transition: opacity 0.5s;
}
.v-enter-to {
  opacity: 1;
}

.show-button {
  position: fixed;
  z-index: 1;
  bottom: 0;
  right: 10vw;

  button {
    box-sizing: border-box;
    padding: 5px 15px;
    background-color: $brand-color;
    border: none;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    box-shadow: 5px 10px 10px 3px rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }
  svg {
    font-size: 20px;
    color: white;
  }
}

.main-chat {
  width: 250px;
  display: flex;
  flex-direction: column;
  position: fixed;
  z-index: 1;
  bottom: 0;
  right: 10vw;
  background-color: white;
  border-bottom: none;
  box-shadow: 5px 10px 10px 3px rgba(0, 0, 0, 0.2);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  .info {
    display: flex;
    border-bottom: 1px solid $brand-color;
    padding: 10px;
    align-items: center;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    text-transform: uppercase;
    font-size: 14px;
  }
}

.title {
  flex: 1;
  text-align: left;
  color: $brand-color;
}

.delete {
  margin-right: 10px;
  cursor: pointer;
}

.chat-box {
  overflow: auto;
  height: 200px;
  overflow-x: hidden;
  padding: 0px 20px;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  .text-box {
    width: 100%;
    padding: 10px;
    background-color: rgb(241, 241, 241);
    margin: 5px 5px;
    border-radius: 10px;
    .text {
      text-align: left;
    }
    .time {
      font-size: 10px;
      color: grey;
    }
  }
}

.error {
  text-align: left;
  padding-left: 10px;
  text-transform: uppercase;
  font-size: 12px;
  letter-spacing: 1px;
  color: rgb(207, 51, 51);
  font-weight: bold;
}

.enter {
  padding-top: 5px;

  display: flex;
  box-sizing: border-box;
  padding: 5px 10px;
  input {
    height: auto;
    flex: 1;
    border: 1px solid $brand-color;
    border-radius: 5px;
    box-sizing: border-box;
    padding: 5px;
  }
  button {
    border-radius: 5px;
    background-color: $brand-color;
    color: white;
    border: none;
    padding: 10px 5px;
    margin-left: 5px;
    cursor: pointer;
    width: 40px;
  }
}
</style>