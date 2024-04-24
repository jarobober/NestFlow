const rules = {
  required: (v: string) => !!v || 'This field is required',
  email: (v: string) =>
    !v || /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
}

export { rules }
