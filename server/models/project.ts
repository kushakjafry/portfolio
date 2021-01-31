import { Schema, model } from 'mongoose';
const imageSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
});
const projectSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    small_description: {
      type: String,
      required: true,
    },
    project_link: {
      type: String,
      required: true,
    },
    github_link: {
      type: String,
      required: true,
    },
    main_image: {
      type: imageSchema,
      required: true,
    },
    project_date: {
      type: String,
      required: true,
    },
    images: [imageSchema],
  },
  {
    timestamps: true,
  }
);
const ProjectModel = model('Project', projectSchema);
export default ProjectModel;
