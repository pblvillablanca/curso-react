import React from "react"
import { Row, Col, Card, Icon, CardTitle} from "react-materialize"
import { Link } from "react-router-dom"

export const Item = ({producto})=>{
    return (
        <>
            <Row>
                <Col
                    m={6}
                    s={12}
                >
                    <Card
                    actions={[
                        <Link key="1" to={"/"}>Comprar</Link>,
                        <Link key="2" to={"/detalle/"+producto.id}>Ver Detalle</Link>
                    ]}
                    closeIcon={<Icon>close</Icon>}
                    header={<CardTitle image={producto.pictureUrl} />}
                    horizontal
                    revealIcon={<Icon>more_vert</Icon>}
                    >
                     <h5>{producto.title}</h5>
                     <ul>
                         <li>{producto.description}</li>
                         <li>Precio: $ {producto.price}</li>
                     </ul>
                     
                    </Card>
                </Col>
                </Row>
        </>

    )
}