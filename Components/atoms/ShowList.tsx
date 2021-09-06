import { List, Button, Row } from 'antd'
import { useContext, useState } from 'react'
import { LanguageContext } from '../../Context/LanguageContext'
import { dataTecnologi } from '../../Interfaces'

const ShowList = ({ data }: dataTecnologi): JSX.Element => {
  const { localLanguage } = useContext(LanguageContext)
  const [ShowList, setShowList] = useState<boolean>()

  const showList = (): void => {
    ShowList ? setShowList(false) : setShowList(true)
  }

  return (
    <Row justify="center">
      <Button size="small" type="link" onClick={showList}>
        {localLanguage
          ? 'Mostrar tecnologías utilizadas'
          : 'Show technologies used'}
      </Button>
      <List
        style={{
          display: `${ShowList ? 'block' : 'none'}`,
        }}
        size="small"
        split
        dataSource={data}
        renderItem={(item: string): JSX.Element => (
          <List.Item
            style={{
              color: '#fff',
            }}
          >
            {item}
          </List.Item>
        )}
      />
    </Row>
  )
}

export default ShowList
