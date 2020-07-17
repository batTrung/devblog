<template>
    <div>
        <b-navbar toggleable="lg" type="light" style="background-color: #e3f2fd;">
            <div class="container">
                <b-navbar-brand :to="{name: 'home'}">DevBlog</b-navbar-brand>
                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
                <b-collapse id="nav-collapse" is-nav>
                    <b-navbar-nav>
                        <b-nav-item :to="{name: 'home'}">Books</b-nav-item>
                        <b-nav-item :to="{name: 'home'}">About</b-nav-item>
                        <b-nav-item :to="{name: 'home'}">Contact</b-nav-item>
                    </b-navbar-nav>
                    <b-navbar-nav class="ml-auto">
                    </b-navbar-nav>
                </b-collapse>
                <b-nav-form>
      <b-form-input class="mr-sm-2" placeholder="Search"></b-form-input>
      <b-button variant="outline-success" class="my-2 my-sm-0" type="submit">Search</b-button>
    </b-nav-form>
            </div>
        </b-navbar>
        <div class="nav-scroller bg-white box-shadow">
            <div class="container">
                <nav class="nav nav-underline">
                    <a class="nav-link active" href="#"><b-badge pill variant="primary">Primary</b-badge></a>
                    <a class="nav-link active" href="#"><b-badge pill variant="primary">Primary</b-badge></a>
                    <a class="nav-link active" href="#"><b-badge pill variant="primary">Primary</b-badge></a>
                    <a class="nav-link active" href="#"><b-badge pill variant="primary">Primary</b-badge></a>
                </nav>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'TheNav'
}
</script>