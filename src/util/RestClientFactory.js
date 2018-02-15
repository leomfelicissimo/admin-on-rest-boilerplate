const RestClientFactory = () => ({
  resources: new Map(),
  addResourceVerb(resource, verb, callback) {
    const resourceVerbs = this.resources.get(resource);
    if (!resourceVerbs) {
      const verbs = new Map();
      this.resources.set(resource, verbs.set(verb, callback));
    } else {
      resourceVerbs.set(verb, callback);
      this.resources.set(resource, resourceVerbs);
    }
    return this;
  },
  getClient() {
    const client = async (type, resource, params) => {
      console.log('calling client: ', type, resource, params);
      const resourceVerbs = this.resources.get(resource);
      const resourceVerbCallback = resourceVerbs.get(type);
      if (resourceVerbCallback) {
        return await resourceVerbCallback(params);
      } else {
        return { data: [] };
      }
    };

    return client;
  },
});


export default RestClientFactory;
