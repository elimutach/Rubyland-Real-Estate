
        // Animated Counters
        function animateCounter(elementId, finalValue, suffix = '') {
            let current = 0;
            const element = document.getElementById(elementId);
            const increment = finalValue / 100;
            const timer = setInterval(() => {
                current += increment;
                if (current >= finalValue) {
                    current = finalValue;
                    clearInterval(timer);
                }
                element.textContent = Math.floor(current) + suffix;
            }, 20);
        }
        
        // Initialize counters when page loads
        document.addEventListener('DOMContentLoaded', function() {
            // Animate hero counters
            setTimeout(() => {
                animateCounter('years-counter', 24, '+');
                animateCounter('clients-counter', 1000, '+');
                animateCounter('valuations-counter', 5000, '+');
                animateCounter('counties-counter', 47);
            }, 500);
            
            // Branch map data
            const branchData = {
                nairobi: {
                    title: "Nairobi Headquarters",
                    address: "Rubyland House, Westlands, Nairobi",
                    manager: "John Kamau",
                    phone: "+254 700 000 000",
                    email: "nairobi@rubyland.co.ke"
                },
                mombasa: {
                    title: "Mombasa Branch",
                    address: "Nyali Business Centre, Mombasa",
                    manager: "Sarah Wanjiku",
                    phone: "+254 711 000 000",
                    email: "mombasa@rubyland.co.ke"
                },
                kisumu: {
                    title: "Kisumu Office",
                    address: "Kisumu Business Park, Kisumu",
                    manager: "Michael Otieno",
                    phone: "+254 722 000 000",
                    email: "kisumu@rubyland.co.ke"
                },
                nakuru: {
                    title: "Nakuru Office",
                    address: "Menengai Complex, Nakuru",
                    manager: "Grace Akinyi",
                    phone: "+254 733 000 000",
                    email: "nakuru@rubyland.co.ke"
                }
            };
            
            // Map pin interactivity
            const pins = document.querySelectorAll('.map-pin');
            const tooltip = document.getElementById('pinTooltip');
            
            pins.forEach(pin => {
                const city = pin.getAttribute('data-city');
                const data = branchData[city];
                
                pin.addEventListener('mouseenter', function(e) {
                    const rect = this.getBoundingClientRect();
                    const mapRect = document.querySelector('.map-container').getBoundingClientRect();
                    
                    tooltip.innerHTML = `
                        <h4>${data.title}</h4>
                        <p><strong>Address:</strong> ${data.address}</p>
                        <p><strong>Branch Manager:</strong> ${data.manager}</p>
                        <p><strong>Phone:</strong> ${data.phone}</p>
                        <p><strong>Email:</strong> ${data.email}</p>
                    `;
                    
                    // Position tooltip
                    tooltip.style.left = (rect.left - mapRect.left + rect.width/2) + 'px';
                    tooltip.style.top = (rect.top - mapRect.top - 10) + 'px';
                    tooltip.classList.add('show');
                });
                
                pin.addEventListener('mouseleave', function() {
                    tooltip.classList.remove('show');
                });
            });
            
            // Show more team members
            document.getElementById('showMoreTeam').addEventListener('click', function() {
                const additionalMembers = [
                    {name: "James Kariuki", role: "Senior Valuer", bio: "10+ years specializing in commercial properties"},
                    {name: "Linda Mwende", role: "Investment Analyst", bio: "CFA, real estate investment strategist"},
                    {name: "Robert Omondi", role: "Project Manager", bio: "15+ years in construction and development"},
                    {name: "Patricia Atieno", role: "Client Success Manager", bio: "Dedicated to ensuring client satisfaction"}
                ];
                
                const teamGrid = document.querySelector('.team-grid');
                additionalMembers.forEach(member => {
                    const card = document.createElement('div');
                    card.className = 'team-card animate-on-scroll';
                    card.innerHTML = `
                        <div class="team-img">
                            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="${member.name}">
                        </div>
                        <div class="team-info">
                            <h4>${member.name}</h4>
                            <p class="team-role">${member.role}</p>
                            <p>${member.bio}</p>
                        </div>
                    `;
                    teamGrid.appendChild(card);
                });
                
                this.style.display = 'none';
                
                // Trigger animation for new cards
                setTimeout(() => {
                    document.querySelectorAll('.animate-on-scroll').forEach(el => {
                        if (isElementInViewport(el)) {
                            el.classList.add('animated');
                        }
                    });
                }, 100);
            });
            
            // ApexCharts - Impact Graph
            const options = {
                series: [{
                    name: 'Clients Helped',
                    data: [50, 120, 200, 350, 520, 750, 1000, 1250, 1500, 1800, 2100, 2400, 5700, 9000, 11400, 13800, 14200, 15800, 16200, 16900, 6000, 10500, 17000, 17800 ,27600]
                }, {
                    name: 'Valuations Completed',
                    data: [100, 250, 450, 700, 1000, 1500, 2200, 3000, 3900, 4800, 5800, 6900, 8100, 9500, 11000, 12600, 14300, 16100, 18000, 20000, 2100, 14300, 26600, 29000 ,31500]
                }],
                chart: {
                    type: 'area',
                    height: 400,
                    zoom: {
                        enabled: false
                    },
                    toolbar: {
                        show: true
                    }
                },
                colors: ['#cf0202', '#ffa8a8'],
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    curve: 'smooth',
                    width: 3
                },
                fill: {
                    type: 'gradient',
                    gradient: {
                        shadeIntensity: 1,
                        opacityFrom: 0.7,
                        opacityTo: 0.3,
                    }
                },
                xaxis: {
                    categories: ['2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024' , '2025'],
                    title: {
                        text: 'Year'
                    }
                },
                yaxis: {
                    title: {
                        text: 'Number'
                    }
                },
                legend: {
                    position: 'top',
                    horizontalAlign: 'center'
                },
                tooltip: {
                    x: {
                        format: 'yyyy'
                    }
                }
            };
            
            const chart = new ApexCharts(document.querySelector("#impactChart"), options);
            chart.render();
            
            // Scroll animations
            function isElementInViewport(el) {
                const rect = el.getBoundingClientRect();
                return (
                    rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.85 &&
                    rect.bottom >= 0
                );
            }
            
            function handleScrollAnimation() {
                document.querySelectorAll('.animate-on-scroll').forEach(el => {
                    if (isElementInViewport(el)) {
                        el.classList.add('animated');
                    }
                });
            }
            
            // Initial check
            handleScrollAnimation();
            
            // Listen for scroll
            window.addEventListener('scroll', handleScrollAnimation);
        });
    