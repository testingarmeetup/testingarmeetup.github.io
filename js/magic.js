const organizers = [{
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
    },
    {
        fullName: 'Nicolás Arkhipenko',
        job: 'Lead Software Test Engineer',
        city: 'Buenos Aires',
        country: 'Argentina',
        twitter: 'https://twitter.com/nicoarkhipenko',
        linkedin: 'https://ar.linkedin.com/in/nicolás-arkhipenko-b2302425',
        img: 'imgs/arkhipenko_nicolas.jpeg',
    }
];


const sociales = [{
    twitter: 'https://twitter.com/aquintian',
    slack: 'https://webtask.it.auth0.com/api/run/wt-iesmite-gmail_com-0/testingar-signup',
}];




const organizadores = `
<div id="dynamic" class="row">
    <div class="col-lg-12 text-center">
    <h2 class="section-heading">EL EQUIPO</h2>
    ${organizers.map(i => `
     <div class="col-sm-3">
        <div class="team-member text-center">
            <img class="img-responsive img-circle" src=${i.img}>
              <h4>${i.fullName}</h4>
              <p id="position" class="text-muted">${i.job}</p>
                <ul class="list-inline social-buttons">
                    <li><a target="_blank" href="${i.twitter}"><i class="fa fa-twitter"></i></a>
                    </li>
                    <li><a target="_blank" href="${i.linkedin}"><i class="fa fa-linkedin"></i></a>
                    </li>
                </ul>
        </div> <!--cierro "team-member"-->
      </div> <!--cierro "col-sm-3"-->
    `).join('')}`;


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

$("#equipo_datos").append(organizadores);//inserto el contenido de organizadores en el html por jQuery
$("#social_datos").append(redes);//inserto el contenido de redes sociales en el html por jQuery
