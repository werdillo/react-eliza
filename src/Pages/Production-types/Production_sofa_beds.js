import React from 'react';
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.css'
import { Row, Col, Container } from 'react-bootstrap';

import { Link } from 'react-router-dom';
import ProductLanding from '../../Components/ProductLanding';
import Alberts from '../../assets/images/production/sofa-beds/alberts/alberts_1.png';
import Alegro from '../../assets/images/production/sofa-beds/alegro/alegro_1.png';
import Argo from '../../assets/images/production/sofa-beds/argo/argo_1.png';
import Astoria from '../../assets/images/production/sofa-beds/astoria/astoria_1.png';
import Barbara from '../../assets/images/production/sofa-beds/barbara/barbara_1.png';
import Boston from '../../assets/images/production/sofa-beds/boston/boston_1.png';
import Dora from '../../assets/images/production/sofa-beds/dora/dora_1.png';
import ElefantMN from '../../assets/images/production/sofa-beds/elefantMN/elefantMN_1.png';
import Favorits from '../../assets/images/production/sofa-beds/favorits/favorits_1.png';
import Filippa from '../../assets/images/production/sofa-beds/filippa/filippa_1.png';
import Flamingo from '../../assets/images/production/sofa-beds/flamingo/flamingo_1.png';
import Florida from '../../assets/images/production/sofa-beds/florida/florida_1.png';
import Graffiti from '../../assets/images/production/sofa-beds/graffiti/graffiti_1.png';
import Hilton from '../../assets/images/production/sofa-beds/hilton/hilton_1.png';
import LionNT from '../../assets/images/production/sofa-beds/lionNT/lionNT_1.png';
import LionNTplus from '../../assets/images/production/sofa-beds/lionNTplus/lionNTplus_1.png';
import Lusso from '../../assets/images/production/sofa-beds/lusso/lusso_1.png';
import Malta from '../../assets/images/production/sofa-beds/malta/malta_1.png';
import Michelle from '../../assets/images/production/sofa-beds/michelle/michelle_1.png';
import Milan from '../../assets/images/production/sofa-beds/milan/milan_1.png';
import Nica from '../../assets/images/production/sofa-beds/nica/nica_1.png';
import Nord from '../../assets/images/production/sofa-beds/nord/nord_1.png';
import Ricards from '../../assets/images/production/sofa-beds/ricards/ricards_1.png';
import Roma from '../../assets/images/production/sofa-beds/roma/roma_1.png';
import Spriditis from '../../assets/images/production/sofa-beds/spriditis/spriditis_1.png';
import Turin from '../../assets/images/production/sofa-beds/turin/turin_1.png';
import Vena from '../../assets/images/production/sofa-beds/vena/vena_1.png';
import Verona from '../../assets/images/production/sofa-beds/verona/verona_1.png';

function ProductLink(props) {
	return (
		<Col sm={12} lg={4}>
			<Link to={props.link}>
				<ProductLanding img={props.img} text={props.text} />
			</Link>
		</Col>
	);
}

export default function Production_sofa_beds() {
	return (
		<div className='products-container'>
			<Container fluid>
				<Row>
					<Col sm={12} lg={12}>
						<p className='production-type-title'>Dīvāni-gultas</p>
					</Col>
					<ProductLink link='details/alberts' img={Alberts} text="ALBERTS" />
					<ProductLink link='details/alegro' img={Alegro} text="ALEGRO" />
					<ProductLink link='details/argo' img={Argo} text="ARGO" />
					<ProductLink link='details/astoria' img={Astoria} text="ASTORIA" />
					<ProductLink link='details/barbara' img={Barbara} text="BARBARA" />
					<ProductLink link='details/boston' img={Boston} text="BOSTON" />
					<ProductLink link='details/dora' img={Dora} text="DORA" />
					<ProductLink link='details/elefantMN' img={ElefantMN} text="ELEFANT MN" />
					<ProductLink link='details/favorits' img={Favorits} text="FAVORITS" />
					<ProductLink link='details/filippa' img={Filippa} text="FILIPPA" />
					<ProductLink link='details/flamingo' img={Flamingo} text="FLAMINGO" />
					<ProductLink link='details/florida' img={Florida} text="FLORIDA" />
					<ProductLink link='details/graffiti' img={Graffiti} text="GRAFFITI" />
					<ProductLink link='details/hilton' img={Hilton} text="HILTON" />
					<ProductLink link='details/lionNT' img={LionNT} text="LION NT" />
					<ProductLink link='details/lionNTplus' img={LionNTplus} text="LION NT+" />
					<ProductLink link='details/lusso' img={Lusso} text="LUSSO" />
					<ProductLink link='details/malta' img={Malta} text="MALTA" />
					<ProductLink link='details/michelle' img={Michelle} text="MICHELLE" />
					<ProductLink link='details/milan' img={Milan} text="MILAN" />
					<ProductLink link='details/nica' img={Nica} text="NICA" />
					<ProductLink link='details/nord' img={Nord} text="NORD" />
					<ProductLink link='details/ricards' img={Ricards} text="RICARDS" />
					<ProductLink link='details/roma' img={Roma} text="ROMA" />
					<ProductLink link='details/spriditis' img={Spriditis} text="SPRĪDĪTIS" />
					<ProductLink link='details/turin' img={Turin} text="TURIN" />
					<ProductLink link='details/vena' img={Vena} text="VENA" />
					<ProductLink link='details/verona' img={Verona} text="VERONA" />
				</Row>
			</Container>	
		</div>
	);
}
