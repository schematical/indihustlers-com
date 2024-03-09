FROM public.ecr.aws/docker/library/node:20-slim
COPY --from=public.ecr.aws/awsguru/aws-lambda-adapter:0.8.1 /lambda-adapter /opt/extensions/lambda-adapter
ENV PORT=8000
WORKDIR "/var/task"
ADD ./package.json /var/task/package.json
ADD ./package-lock.json /var/task/package-lock.json
RUN npm install --omit=dev
ADD ./ /var/task
ENV HOME /tmp
ENV NPM_CONFIG_CACHE /tmp/.npm
CMD ["next", "start"]
# CMD ["npm", "start"]