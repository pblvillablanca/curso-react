import React from "react"
import { Row, Col, Card, Icon, CardTitle} from "react-materialize"

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
                        <a key="1" href="#">Comprar</a>
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