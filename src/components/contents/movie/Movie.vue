<template>
    <div class="movie">
        <div class="movieImg">
            <img :src="movie.images.medium" />
        </div>
        <div class="movieInfo">
            <p class="movieTitle">{{title}}</p>
            <p>主演：{{castNames}}</p>
        </div>
        <div class="movieScore"></div>
    </div>
</template>

<script>
export default {
    props: {
        movie: {
            type: Object
        }
    },
    computed: {
        title() {
            if (this.movie.title == this.movie.original_title) {
                return this.movie.title + " " + "(" + this.movie.year + ")";
            }

            return this.movie.title + " " + this.movie.original_title + "(" + this.movie.year + ")";
        },
        castNames() {
            var name = "";
            var len = this.movie.casts.length - 1;
            this.movie.casts.forEach((el, index) => {
                name += el.name;
                if (index != len) {
                    name += "/";
                }
            });

            return name;
        }
    }
}
</script>

<style>
.movie {
    background: #fff;
    padding: 1rem;
    margin-bottom: 2rem;
    display: -webkit-box;
}

.movieImg {
    width: 5rem;
}

.movieImg img {
    width: 100%;
}

.movieScore {
    width: 5rem;
}

.movieInfo {
    -webkit-box-flex: 1;
    padding-left: 1rem;
}

.movieInfo p {
    padding: 0;
    margin: 0 0 0.5rem 0;
}
</style>


