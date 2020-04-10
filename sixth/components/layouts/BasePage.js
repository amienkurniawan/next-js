import { Container } from "reactstrap";

const BasePage = props => {
    const { children } = props;
    const className = props.className || '';
    return (
        <div className={`base-page ${className}`}>
            <Container>
                {children}
            </Container>
        </div>
    )
}
BasePage.defaultProps = {
    className: ''
}
export default BasePage;