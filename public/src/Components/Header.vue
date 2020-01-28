<template>
    <nav class="navbar navbar-expand-sm navbar-light bg-dark mb-3">
        <div class="container">
            <a class="navbar-brand" href="#">Navbar</a>
            <ul class="navbar-nav">
                <li class="nav-item">
                   <router-link class="nav-link" to="/manager">Home</router-link>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">About</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Services</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Contact</a>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {
    
}
</script>