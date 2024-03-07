import PostSchema from "./note.schema.js";

export const getAll = async (req, res) => {
  try {
    const allPost = await PostSchema.find();
    res.json(allPost);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Не удалось загрузить заметки",
    });
  }
};

export const create = async (req, res) => {
  try {
    const doc = new PostSchema({
      text: req.body.text,
    });
    const post = await doc.save();
    res.json(post);
  } catch (error) {
    console.log(error);
    res.ststus(500).json({
      message: "Не удалось создать заметку",
    });
  }
};

export const remove = async (req, res) => {
  try {
    const postId = req.params.id;
    await PostSchema.findByIdAndDelete({
      _id: postId,
    });
    res.json({
      sucsess: true,
    });
  } catch (error) {
    console.log(error);
    res.ststus(500).json({
      message: "Не удалось удалить заметку",
    });
  }
};
