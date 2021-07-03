<script context="module">
  export const prerender = true;
</script>
<script>
  import Carousel from './carousel.svelte'
  let technologies = [
    {
      extraClasses: "grid-cols-2 grid-rows-2",
      images: [
        {
          src: "static/react.webp",
        },
        {
          src: "static/svelte.webp",
        },
        {
          src: "static/django.webp",
        },
        {
          src: "static/jquery.webp",
        },
      ],
    },
    {
      extraClasses: "grid-cols-2 grid-rows-2",
      images: [
        { src: "static/materialui.webp" },
        {
          src: "static/bootstrap.webp",
        },
        {
          src: "static/tailwind.webp",
          extraClasses: "col-span-full",
        },
      ],
    },
    {
      extraClasses: "grid-rows-1 grid-cols-2",
      images: [
        {
          src: "static/reactnative.webp",
        },
        {
          src: "static/expo.webp",
        },
      ],
    },
    {
      extraClasses: "grid-rows-2 grid-cols-2",
      images: [
        {
          src: "static/apollo.webp",
        },

        {
          src: "static/typegraphql.webp",
        },

        {
          src: "static/postgraphile.webp",
          extraClasses: "col-span-full",
        },
      ],
    },
    {
      extraClasses: "grid-cols-2 grid-rows-2",
      images: [
        {
          src: "static/postgres.webp",
        },
        {
          src: "static/sequelize.webp",
        },
        {
          src: "static/typeorm.webp",
        },
        {
          src: "static/sqlalchemy.webp",
        },
      ],
    },

    {
      extraClasses: "grid-cols-2 grid-rows-2",
      images: [
        {
          src: "static/pandas.webp",
        },
        {
          src: "static/scikit.webp",
        },
        {
          src: "static/spotlight.webp",
        },
        {
          src: "static/networkx.webp",
        },
      ],
    },

  ];

</script>
<Carousel {technologies}/>
