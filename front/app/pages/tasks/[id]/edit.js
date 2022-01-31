import { useRouter } from 'next/router';
import Edit from '../../../components/Edit'
import Select from '../../../pages/select'

const Page = (props) => {
  const router = useRouter();

  return (
    <div>
      <Select />
      <Edit 
        task_id={router.query.id}
        task_content={props.task.content}
        task_duedate={props.task.duedate}
      />
    </div>
  );
};

export const getStaticPaths = async () => {
  // 外部APIエンドポイントを呼び出しデータ取得
  const res = await fetch("http://api:3000/tasks")
  const tasks = await res.json()  

  // 事前ビルドしたいパスを指定
  const paths = tasks.map((task) => ({
    params: {
      // ファイル名と合わせる ※文字列指定
      id: task.id.toString(),
    },
  }))
  // paths：事前ビルドするパス対象を指定するパラメータ
  // fallback：事前ビルドしたパス以外にアクセスしたときのパラメータ true:カスタム404Pageを表示 false:404pageを表示
  return { paths, fallback: false }
}

export const getStaticProps = async ({ params }) => {  
  // const body = {"text": "test"}
  // 外部APIエンドポイントを呼び出しデータ取得
  const res = await fetch(`http://api:3000/tasks/${params.id}/edit`)
  const task = await res.json()  

  // ページコンポーネントにpropsとしてに渡す
  return {
    props: {
      task
    },
  }
}

export default Page;