import { Col, Image, Row } from 'antd'

const Inicio = (): JSX.Element => {
  return (
    <>
      <Row justify='space-around' className='main_page' align='middle'>
        <Col>
          <div>
            <span className='before_name'>Hola, mi nombre es</span>
            <h1 className='name'>
              Wilinston
              <span> Quispe</span>
            </h1>
          </div>
        </Col>
        <Col>
          <Image
            className='img_circle'
            width={250}
            height='250px'
            preview={false}
            src='https://lh3.googleusercontent.com/tU-nJGvF8ZYAECQnQgbGaluPBMbD8W58xUQwKts4lIGUT4gPC-aImovbXETU4KDZ2KNyJ9zI0bUiBPauxhqBctRawvgoyMcfGSVwf7vBW4Je1TK-S-lKVYeTab1WpilBj9GxedK9ItFhq7OnjPYYJt2WqIqN82xMzCKwfHlj5hS7yaFjdXZXPrMvHXIOmdxox5PGnVuS5EOt8cypxTpK6HMSRgONzO027I1yTQOAg0XzEwd-vDatY2kyn3qmBK8hTdMJ2RZavj4XrqsrEy0GEX9KOUAPsvqd5oeHg_1M7DLBIx648Gvi3Ao5vyy8lbCDG-dFx2OWdhhWNmq7ixkwutBmPp5Decs9kVkw5XFhxRrCSuxKhUTwAktREuT009ZAWtZ6elQOdRJ6kd1fSnIJ6n2fNGKZp3EFOt5EJ0X2vsYUwlamOJY1T8mUCYVEmgUZK2UpcjaJ0Ife_mJAX3mvIx716JZIkDDQI_GkGIEy2OHNNyE863BgyYa4uqQesAEYeGc22Q5QKd9SIbKtK_ncwIVXk31XQAPcGZfiEzYltsnEG5TaV_pmG8nfkucqKG4cGocVmmRqkX0wCj30AZXvYMg2BZNQ0EtljmmKjV7e5cHXsEah1kEPq_uOGQ41sfgPzIjiOQCOAJ-5ExDecFVy77oCJYRA70e29VQCoQCYQKF-67oc-aGZ2HKEZel1q5oaJrhec1z6JaP08R9qkfAIooZh=w480-h639-no?authuser=0'
          />
        </Col>
      </Row>
    </>
  )
}

export default Inicio
