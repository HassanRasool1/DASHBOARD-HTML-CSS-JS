document.querySelectorAll('.sidebar-submenu').forEach(e => {
    e.querySelector('.sidebar-menu-dropdown').onclick = (event) => {
        event.preventDefault()
        e.querySelector('.sidebar-menu-dropdown .dropdown-icon').classList.toggle('active')

        let dropdown_content = e.querySelector('.sidebar-menu-dropdown-content')
        let dropdown_content_lis = dropdown_content.querySelectorAll('li')

        let active_height = dropdown_content_lis[0].clientHeight * dropdown_content_lis.length

        dropdown_content.classList.toggle('active')

        dropdown_content.style.height = dropdown_content.classList.contains('active') ? active_height + 'px' : '0'
    }
})

let category_options = {
    series: [6636670, 7704130,3784050,4425340,3954910,3235000,4642810,2728420,4092850,4140240,4210800,4254360],
    labels: ['LAHORE','KARACHI','ISLAMABAD','MULTAN','OKARA','PESHAWAR','RAWALPINDI','HAIDARABAD','SIALKOT','SAHIWAL','QUETTA','GUJRANWALA'],
    chart: {
        type: 'donut',
        height: 400,
        width: 350,  
    },
    colors: ['#6ab04c', '#2980b9', '#f39c12', '#d35400','#2E3C74','#a162da','#0a3251','#f4f747','#f747c3','#0b0847','#bf7710','#4af6a6']
}

let category_chart = new ApexCharts(document.querySelector("#category-chart"), category_options)
category_chart.render()

let customer_options = {
    series: [{
        name: "Store Customers",
        data: [40, 70, 20, 90, 36, 80, 30, 91, 60,56,79,90]
    },{
        name: "Online Customers",
        data: [20, 30, 70, 20, 16, 40, 20, 51, 10,100,90,40]
    },
            {
        name: "Royal Customers",
        data: [0, 0, 10, 15, 12, 18, 10, 71, 4,16,9,0]
    }],
    colors: ['#074792', '#176F0F', '#B7161A'],
    chart: {
        height:280,
        type: 'line',
    },
    dataLabels: {
//        enabled: true
        enabled: false
    },
    stroke: {
        curve: 'smooth'
    },
    xaxis: {
        categories: ['LAHORE','KARACHI','ISLAMABAD','MULTAN','OKARA','PESHAWAR','RAWALPINDI','HAIDARABAD','SIALKOT','SAHIWAL','QUETTA','GUJRANWALA' ],
    },
    legend: {
        position: 'top'
    }
}

let customer_chart = new ApexCharts(document.querySelector("#customer-chart"), customer_options)
customer_chart.render()

setDarkChart = (dark) => {
    let theme = {
        theme: {
            mode: dark ? 'dark' : 'light'
        }
    }

    customer_chart.updateOptions(theme)
    category_chart.updateOptions(theme)
} 

// DARK MODE TOGGLE
let darkmode_toggle = document.querySelector('#darkmode-toggle')

darkmode_toggle.onclick = (e) => {
    e.preventDefault()
    document.querySelector('body').classList.toggle('dark')
    darkmode_toggle.querySelector('.darkmode-switch').classList.toggle('active')
    setDarkChart(document.querySelector('body').classList.contains('dark'))
}

let overlay = document.querySelector('.overlay')
let sidebar = document.querySelector('.sidebar')

document.querySelector('#mobile-toggle').onclick = () => {
    sidebar.classList.toggle('active')
    overlay.classList.toggle('active')
}

document.querySelector('#sidebar-close').onclick = () => {
    sidebar.classList.toggle('active')
    overlay.classList.toggle('active')
}
