<template>
    <div class="blog">
        <div class="blog-title">{{blog.title}}</div>
        <div class="blog-info">作者：{{blog.author.name}} • {{publishTime}}</div>
        <div class="blog-summary">{{blog.summary}}...</div>
        <div class="blog-read">
            <a class="blog-read-btn" :href="blogLink" target="_blank">阅读全文</a>
        </div>
        <div class="blog-footer">
            <span>最后更新于{{lastUpdateTime}}&nbsp;&nbsp;&nbsp;</span>
            <span>评论({{blog.comments}})&nbsp;&nbsp;&nbsp;</span>
            <span>阅读({{blog.views}})&nbsp;&nbsp;&nbsp;</span>
            <span>推荐({{blog.diggs}})&nbsp;&nbsp;&nbsp;</span>
            <a class="blog-link" :href="blog.link" target="_blank">原文链接</a>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        blog: {
            type: Object
        }
    },
    computed: {
        publishTime() {
            var date = new Date(this.blog.published);
            return this.getShowTime(date);
        },
        lastUpdateTime() {
            var date = new Date(this.blog.updated);
            return this.getShowTime(date);
        },
        blogLink() {
            return "/blog/" + this.blog.id;
        }
    },
    methods: {
        getShowTime(date) {
            var y = date.getFullYear();
            var m = this.toTwo(date.getMonth() + 1);
            var d = this.toTwo(date.getDate());
            var h = this.toTwo(date.getHours());
            var min = this.toTwo(date.getMinutes());
            var s = this.toTwo(date.getSeconds());
            return y + "-" + m + "-" + d + " " + h + ":" + min + ":" + s;
        },
        toTwo(num) {
            if (num < 10) {
                return "0" + num;
            }
            return num;
        }
    }
}
</script>

<style>
.blog {
    background: #fff;
    padding: 1rem;
    margin-bottom: 2rem;
}

.blog-title {
    font-size: 1rem;
    line-height: 1.5rem;
    text-align: center;
    margin-bottom: 0.5rem;
}

.blog-info {
    font-size: 0.7rem;
    text-align: center;
}

.blog-summary {
    font-size: 0.9rem;
    margin-top: 1.5rem;
    line-height: 1.5rem;
}

.blog-read {
    margin-top: 1.2rem;
}

.blog-read-btn {
    font-size: 0.7rem;
    display: block;
    padding: 0.5rem;
    background: #f60;
    text-align: center;
    color: #fff;
    width: 5rem;
    border-radius: 4px;
    transition: all 400ms;
    box-sizing: border-box;
    cursor: pointer;
    text-decoration: none;
}

.blog-read-btn:hover {
    background: #303030;
    text-decoration: none;
}

.blog-footer {
    margin-top: 1.5rem;
    border-top: 1px solid #ebebeb;
    padding-top: 1rem;
    font-size: 0.7rem;
}

.blog-link {
    float: right;
    color: #075db3;
}

.blog-link:hover {
    color: #f60;
}
</style>


