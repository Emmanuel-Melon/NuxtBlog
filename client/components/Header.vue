<template>
  <header>
    <div class="navbar bg-base-100">
      <div class="flex-1">
        <NuxtLink to="/" class="btn btn-ghost text-xl">NextBlog</NuxtLink>
      </div>
      <div class="flex-none">
        <div class="dropdown dropdown-end">
          <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
            <div class="w-10 rounded-full">
              <img alt="Tailwind CSS Navbar component"
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
          <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <NuxtLink to="/profile">
                Profile
              </NuxtLink>
            </li>
            <li><NuxtLink to="/settings">Settings</NuxtLink></li>
            <li><NuxtLink to="/auth">Logout</NuxtLink></li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>