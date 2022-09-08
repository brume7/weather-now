<template>
    <nav class="sidebar" :class="toggleOpen ? 'col-md-3' : 'col-md-1'">
        <div class="container-fluid d-flex flex-column">
            <button class="btn ms-auto text-center" :class="toggleOpen ? 'col-3' : 'col-5'"
                @click.stop="toggleOpen = !toggleOpen">
                <span class="menu-nav">
                    <font-awesome-icon icon="navicon"></font-awesome-icon>
                </span>
            </button>
            <div class="col-12  mt-5 d-flex search rounded-5">
                <div class="d-flex" :class="toggleOpen ? 'col-1': 'col'">
                    <label for="DataList"
                        class="form-label mt-auto mb-auto d-flex justify-content-center align-items-center col search-icon">
                        <font-awesome-icon icon="search" :class="toggleOpen ? '': 'text-center'"></font-awesome-icon>
                    </label>
                </div>
                <div :class="toggleOpen ? 'col-10 d-flex float-end': 'd-none'">
                    <input class="form-control rounded-3 search-bar mt-auto mb-auto" list="datalistOptions" id="DataList"
                        placeholder="Search a location" @change="cha">
                    <datalist id="datalistOptions">
                        <option v-for="(items , i) in countryList" :key="i" :value="items" />
                    </datalist>
                </div>
            </div>
        </div>
    </nav>
</template>
<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
    name: 'NavBar',
    data() {
        return {
            toggleOpen: true,
            countryList: ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Anguilla", "Antigua &amp; Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia &amp; Herzegovina", "Botswana", "Brazil", "British Virgin Islands", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Cape Verde", "Cayman Islands", "Chad", "Chile", "China", "Colombia", "Congo", "Cook Islands", "Costa Rica", "Cote D Ivoire", "Croatia", "Cruise Ship", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Estonia", "Ethiopia", "Falkland Islands", "Faroe Islands", "Fiji", "Finland", "France", "French Polynesia", "French West Indies", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kuwait", "Kyrgyz Republic", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Mauritania", "Mauritius", "Mexico", "Moldova", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Namibia", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Norway", "Oman", "Pakistan", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russia", "Rwanda", "Saint Pierre &amp; Miquelon", "Samoa", "San Marino", "Satellite", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "South Africa", "South Korea", "Spain", "Sri Lanka", "St Kitts &amp; Nevis", "St Lucia", "St Vincent", "St. Lucia", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor L'Este", "Togo", "Tonga", "Trinidad &amp; Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks &amp; Caicos", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "Uruguay", "Uzbekistan", "Venezuela", "Vietnam", "Virgin Islands (US)", "Yemen", "Zambia", "Zimbabwe"],
        }
    },
    components: {
        FontAwesomeIcon,
    },
    methods: {
        cha(evt) {
            this.$emit('country', evt.target.value)
        }
    }
}
</script>
<style scoped>
nav {
    height: 100vh;
}

.sidebar {
    background-color: #BDE8F5;
}

.search {
    height: 50px;
    background-color: #D8F3FB;
    color: #001F50 !important;
}


.search-bar {
    border: none !important;
    height: 30px;
    background-color: #D8F3FB;
    color: #001F50 !important;
}

.search-icon {
    color: #001F50 !important;
}

.search-bar:active,
.search-bar:focus {
    background-color: #D8F3FB;
    color: #001F50 !important;
}
</style>