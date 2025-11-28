import { AppLink } from "@/shared/ui/AppLink/AppLink";
import type { Project } from "../Projects";
import styled from "styled-components";
import { Flex } from "@/shared/ui/Flex/Flex";

interface ProjectsItemProps {
  project: Project;
}

export const ProjectsItem = ({ project }: ProjectsItemProps) => {
  const { img, title, text, stackList, preview, code } = project;
  return (
    <ProjectsItemStyled>
      <ImgContainer>
        <Img
          src={img}
          alt={"image"}
        />
        <AppLink to={preview}>
          <span>Live preview</span>
        </AppLink>
      </ImgContainer>

      <Content>
        <Title>{title}</Title>
        <Text>{text}</Text>
        <Stack>
          <span>{"Tech stack: "}</span>
          {stackList.map((s, i) => {
            return <span key={s + i}>{s}</span>;
          })}
        </Stack>
        <Flex justify="space-between">
          <AppLink to={preview}>
            <span>Live preview</span>
          </AppLink>
          <AppLink to={code}>
            <span>View code</span>
          </AppLink>
        </Flex>
      </Content>
    </ProjectsItemStyled>
  );
};

const ProjectsItemStyled = styled.div`
  /* max-width: 30%; */
  width: 32%;
  background: var(--card-color);
  border-radius: var(--border-radius-l);
  margin-bottom: 50px;
`;

const ImgContainer = styled.div`
  width: 100%;
  height: 260px;
  border-radius: 20px 20px 0 0;
  position: relative;
  z-index: 0;
`;

const Img = styled.img`
  width: 100%;
  border-radius: 20px 20px 0 0;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  transition: all var(--transtion-delay) linear;
  z-index: 1;
`;

const Content = styled.div`
  padding: 16px 30px 24px;
`;

const Title = styled.h4`
  margin-bottom: 16px;
`;

const Text = styled.div`
  margin-bottom: 12px;
`;

const Stack = styled.div`
  margin-bottom: 20px;
`;
