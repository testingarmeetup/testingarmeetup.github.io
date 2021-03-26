const organizers = [[{
        fullName: 'Andres Curcio',
        job: 'Software Tester',
        city: 'Buenos Aires',
        country: 'Argentina',
        twitter: 'https://twitter.com/aquintian',
        linkedin: 'https://ar.linkedin.com/in/andrescurcio',
        img: 'imgs/curcio_andres.jpeg',
    },
    {
        fullName: 'Damián Meydac',
        job: 'Software Tester',
        city: 'Buenos Aires',
        country: 'Argentina',
        twitter: 'https://twitter.com/damimj',
        linkedin: 'https://www.linkedin.com/in/damianmeydacjean/es',
        img: 'imgs/meydac_damian.jpeg',
    },
    {
        fullName: 'Ignacio Esmite',
        job: 'Software Engineer',
        city: 'Buenos Aires',
        country: 'Argentina',
        twitter: 'https://twitter.com/nachoesmite',
        linkedin: 'https://ar.linkedin.com/in/iesmite/es',
        img: 'imgs/esmite_ignacio.jpeg',
    }],[
    {
        fullName: 'Rodrigo Martin',
        job: 'Software Engineer',
        city: 'Buenos Aires',
        country: 'Argentina',
        twitter: 'https://twitter.com/adidas_pump',
        linkedin: 'http://linkedin.com/in/martinrodrigo',
        img: 'imgs/martin_rodrigo.jpg',
    },
    {
        fullName: 'Alejandro Rodriguez',
        job: 'Software Tester',
        city: 'Buenos Aires',
        country: 'Argentina',
        img: 'imgs/rodriguez_alejandro.png',
    }]
];


const sociales = [{
    twitter: 'https://twitter.com/TestingARMeetup',
    slack: 'https://testingar-slack.vercel.app/'
}];


const getOrganizerHtml = (organizer) => {
    return `
        <div style="margin-left:5em" class="col-sm-3">
            <div class="team-member text-center">
                <img class="img-responsive img-circle" src=${organizer.img}>
                <h4>${organizer.fullName}</h4>
                <p id="position" class="text-muted">${organizer.job}</p>
                <ul class="list-inline social-buttons">
                    <li><a target="_blank" href="${organizer.twitter}"><i class="fa fa-twitter"></i></a>
                    </li>
                    <li><a target="_blank" href="${organizer.linkedin}"><i class="fa fa-linkedin"></i></a>
                    </li>
                </ul>
            </div> <!--cierro "team-member"-->
        </div> 
    `;
}

let organizersHtml = organizers.map((organizersRow) => {
    return `
    <div id="dynamic" class="row">
        <div class="col-lg-12 text-center">
        ${organizersRow.map(i =>  getOrganizerHtml(i)).join('')}
        </div>
    </div>`
}).join('');

organizersHtml = `
    <div class="col-lg-12 text-center">
    <h2 class="section-heading">EL EQUIPO</h2>
    </div>
    ${organizersHtml}
    `;


const redes = `
<div id="dynamic" class="row text-center">
    <div class="col-lg-12 text-center">
        <h2 class="section-heading">REDES SOCIALES</h2>
    </div>
</div>
    ${sociales.map(i => `
    <div class="row text-center">
        <div class="col-md-6">
            <span class="fa-stack fa-4x">
                <i class="fa fa-circle fa-stack-2x text-primary"></i>
                <i class="fa fa-twitter fa-stack-1x fa-inverse"></i>
            </span>
                <h4 class="service-heading"><a target="_blank" href=${i.twitter}>Seguínos en Twitter</a></h4>
        </div><!--cierro "col-md-6"-->
        <div class="col-md-6">
            <span class="fa-stack fa-4x">
                <i class="fa fa-circle fa-stack-2x text-primary"></i>
                <i class="fa fa-slack fa-stack-1x fa-inverse"></i>
            </span>
                <h4 class="service-heading"><a target="_blank" href=${i.slack}>Registrate en nuestro Slack</a></h4>
        </div><!--cierro "col-md-6"-->
    </div><!--cierro "row"-->
    `).join('')}`;

$("#equipo_datos").append(organizersHtml);
$("#social_datos").append(redes);//inserto el contenido de redes sociales en el html por jQuery
