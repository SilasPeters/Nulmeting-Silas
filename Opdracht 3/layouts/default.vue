<template>
<div>
  <Menu></Menu>
  <Nuxt />
</div>
</template>

<style> /* global code! */
* {
	font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
	font-size: large;
}
h1 {
	font-size: 23px;
}
.hyperlink {
	text-decoration: underline;
}

/* exact link will show the primary color for only the exact matching link */
a.nuxt-link-exact-active {
  color: #3151e3;
}

a,
a:visited {
  text-decoration: none;
  color: inherit;
}
a:hover {
  color: #3151e3;
}
</style>