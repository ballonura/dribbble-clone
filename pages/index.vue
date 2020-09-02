<template>
  <div class="flex flex-wrap">
    <div
      v-for="shot in shots"
      :key="shot.id"
      class="flex flex-col w-full p-4 mb-12"
      style="max-width: 20%; height: 300px;"
    >
      <img
        :src="require(`@/assets/images/shots/${shot.id}.png`)"
        class="w-full h-full rounded-lg mb-2"
      />
      <div class="flex justify-between items-center">
        <div class="flex">
          <img :src="require(`@/assets/images/users/${shot.id}.png`)" class="rounded-full w-6 mr-2" />
          <p class="text-sm text-gray-700 font-medium mr-2">{{shot.userName}}</p>
          <div
            class="rounded-md bg-gray-800 text-white leading-none uppercase font-bold flex justify-center items-center"
            style="font-size: 10px; padding: 2px 3px;"
          >
            <p>{{shot.badge}}</p>
          </div>
        </div>
        <div class="flex items-center">
          <div class="flex items-center mr-2">
            <!-- prettier-ignore -->
            <svg class="w-3 mr-1 text-gray-500 fill-current" viewBox="0 0 14 15">
              <path
                d="M8.75 0.5H5.25C2.35025 0.5 0 2.85025 0 5.75C0 8.24783 1.74592 10.3344 4.08333 10.8652V14.5L8.16667 11H8.75C11.6497 11 14 8.64975 14 5.75C14 2.85025 11.6497 0.5 8.75 0.5Z"
              />
            </svg>
            <p class="text-gray-500 text-xs font-normal">{{shot.comments}}</p>
          </div>
          <div class="flex items-center">
            <!-- prettier-ignore -->
            <svg class="w-3 mr-1 text-gray-500 fill-current" viewBox="0 0 24 24">
              <path
                d="m18.199 2.04c-2.606-.284-4.262.961-6.199 3.008-2.045-2.047-3.593-3.292-6.199-3.008-3.544.388-6.321 4.43-5.718 7.96.966 5.659 5.944 9 11.917 12 5.973-3 10.951-6.341 11.917-12 .603-3.53-2.174-7.572-5.718-7.96z"
              />
            </svg>
            <p class="text-gray-500 text-xs font-normal">{{shot.likes}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      shots: [
        {
          id: 1,
          showImage: "",
          userName: "ballonura",
          userImage: "ballonura",
          badge: "pro",
          likes: 123,
          comments: 15
        },
        {
          id: 1,
          showImage: "",
          userName: "ballonura",
          userImage: "ballonura",
          badge: "pro",
          likes: 123,
          comments: 15
        },
        {
          id: 1,
          showImage: "",
          userName: "ballonura",
          userImage: "ballonura",
          badge: "pro",
          likes: 123,
          comments: 15
        },
        {
          id: 1,
          showImage: "",
          userName: "ballonura",
          userImage: "ballonura",
          badge: "pro",
          likes: 123,
          comments: 15
        },
        {
          id: 1,
          showImage: "",
          userName: "ballonura",
          userImage: "ballonura",
          badge: "pro",
          likes: 123,
          comments: 15
        },
        {
          id: 1,
          showImage: "",
          userName: "ballonura",
          userImage: "ballonura",
          badge: "pro",
          likes: 123,
          comments: 15
        },
        {
          id: 1,
          showImage: "",
          userName: "ballonura",
          userImage: "ballonura",
          badge: "pro",
          likes: 123,
          comments: 15
        },
        {
          id: 1,
          showImage: "",
          userName: "ballonura",
          userImage: "ballonura",
          badge: "pro",
          likes: 123,
          comments: 15
        },
        {
          id: 1,
          showImage: "",
          userName: "ballonura",
          userImage: "ballonura",
          badge: "pro",
          likes: 123,
          comments: 15
        },
        {
          id: 1,
          showImage: "",
          userName: "ballonura",
          userImage: "ballonura",
          badge: "pro",
          likes: 123,
          comments: 15
        }
      ]
    };
  }
};
</script>
